import os
import pymupdf
from PIL import Image
import io

def extract_pdf_images(pdf_path, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    doc = pymupdf.open(pdf_path)
    print(f"Opened '{pdf_path}' with {len(doc)} pages.")
    
    extracted_records = []
    seen_xrefs = set()

    for page_idx, page in enumerate(doc):
        image_list = page.get_images(full=True)
        print(f"\n--- Page {page_idx + 1} ({len(image_list)} embedded images found) ---")
        
        for img_idx, img_info in enumerate(image_list):
            xref = img_info[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            width = base_image["width"]
            height = base_image["height"]
            
            # Filename
            filename = f"page_{page_idx + 1:02d}_img_{img_idx + 1:02d}_xref_{xref}.{image_ext}"
            file_path = os.path.join(output_dir, filename)
            
            with open(file_path, "wb") as f:
                f.write(image_bytes)
                
            is_duplicate = xref in seen_xrefs
            seen_xrefs.add(xref)
            
            status = "Duplicate xref" if is_duplicate else "Unique"
            print(f"  [+] Saved: {filename} [{width}x{height} px, {len(image_bytes)/1024:.1f} KB] ({status})")
            
            extracted_records.append({
                "page": page_idx + 1,
                "filename": filename,
                "width": width,
                "height": height,
                "size_kb": round(len(image_bytes)/1024, 1),
                "format": image_ext,
                "xref": xref
            })
            
    print(f"\nExtracted {len(extracted_records)} image occurrences ({len(seen_xrefs)} unique images) to '{output_dir}'.")
    return extracted_records

if __name__ == "__main__":
    pdf_file = "public/DECCAN_TOOLINGS_PROFILE.pdf"
    out_dir = "extracted_images"
    extract_pdf_images(pdf_file, out_dir)
