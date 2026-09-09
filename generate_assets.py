import os
import math
from PIL import Image, ImageDraw, ImageFont

def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

# Colors
NAVY_BG = (10, 20, 40)
DARK_SLATE = (18, 26, 42)
LIGHT_SLATE = (30, 41, 59)
STEEL_GRAY = (100, 116, 139)
LIGHT_STEEL = (148, 163, 184)
BRIGHT_STEEL = (226, 232, 240)
CARBIDE_DARK = (45, 52, 64)
CARBIDE_MED = (75, 85, 99)
CARBIDE_LIGHT = (160, 174, 192)
CARBIDE_SHINE = (240, 245, 250)
RED_ACCENT = (220, 38, 38)
RED_BRIGHT = (239, 68, 68)
GOLD_ACCENT = (234, 179, 8)
CYAN_ACCENT = (14, 165, 233)
WHITE = (255, 255, 255)

def draw_grid_background(draw, width, height, dark=True, grid_size=32):
    bg_color = (11, 19, 36) if dark else (241, 245, 249)
    line_color = (255, 255, 255, 12) if dark else (0, 0, 0, 15)
    
    # Gradient bg
    for y in range(height):
        ratio = y / height
        if dark:
            r = int(10 + ratio * 12)
            g = int(18 + ratio * 15)
            b = int(34 + ratio * 20)
        else:
            r = int(245 - ratio * 10)
            g = int(247 - ratio * 10)
            b = int(250 - ratio * 10)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    # Grid lines
    for x in range(0, width, grid_size):
        draw.line([(x, 0), (x, height)], fill=(25, 42, 70) if dark else (226, 232, 240), width=1)
    for y in range(0, height, grid_size):
        draw.line([(0, y), (width, y)], fill=(25, 42, 70) if dark else (226, 232, 240), width=1)
        
    # Technical markings (crosshairs & corners)
    draw.line([(30, 30), (50, 30)], fill=RED_ACCENT, width=2)
    draw.line([(30, 30), (30, 50)], fill=RED_ACCENT, width=2)
    draw.line([(width-30, 30), (width-50, 30)], fill=RED_ACCENT, width=2)
    draw.line([(width-30, 30), (width-30, 50)], fill=RED_ACCENT, width=2)
    draw.line([(30, height-30), (50, height-30)], fill=RED_ACCENT, width=2)
    draw.line([(30, height-30), (30, height-50)], fill=RED_ACCENT, width=2)
    draw.line([(width-30, height-30), (width-50, height-30)], fill=RED_ACCENT, width=2)
    draw.line([(width-30, height-30), (width-30, height-50)], fill=RED_ACCENT, width=2)

def draw_header_badge(draw, text, subtext, x=45, y=40):
    draw.rectangle([(x, y), (x + 8, y + 36)], fill=RED_ACCENT)
    try:
        font_main = ImageFont.truetype("arial.ttf", 20)
        font_sub = ImageFont.truetype("arial.ttf", 12)
    except:
        font_main = ImageFont.load_default()
        font_sub = ImageFont.load_default()
    draw.text((x + 16, y), text, fill=WHITE, font=font_main)
    draw.text((x + 16, y + 22), subtext, fill=LIGHT_STEEL, font=font_sub)

def create_logo():
    width, height = 640, 160
    img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Graphic Icon on left (Cutter silhouette with precision 5-axis orbital paths)
    cx, cy = 70, 80
    # Outer precision orbital rings
    draw.arc([(cx-55, cy-55), (cx+55, cy+55)], 0, 360, fill=(220, 38, 38, 240), width=3)
    draw.arc([(cx-42, cy-42), (cx+42, cy+42)], -45, 225, fill=(14, 165, 233, 200), width=2)
    draw.arc([(cx-30, cy-30), (cx+30, cy+30)], 45, 315, fill=(200, 210, 225, 220), width=2)
    
    # 4 Cutter Flutes radiating from center
    for angle in [0, 90, 180, 270]:
        rad = math.radians(angle + 25)
        x1 = cx + math.cos(rad) * 10
        y1 = cy + math.sin(rad) * 10
        x2 = cx + math.cos(rad) * 38
        y2 = cy + math.sin(rad) * 38
        draw.line([(x1, y1), (x2, y2)], fill=(255, 255, 255), width=4)
        draw.ellipse([(x2-4, y2-4), (x2+4, y2+4)], fill=RED_ACCENT)
    
    # Center carbide core
    draw.ellipse([(cx-12, cy-12), (cx+12, cy+12)], fill=(220, 38, 38))
    draw.ellipse([(cx-6, cy-6), (cx+6, cy+6)], fill=(255, 255, 255))
    
    # Typography
    try:
        font_title = ImageFont.truetype("arialbd.ttf", 38)
        font_sub = ImageFont.truetype("arial.ttf", 15)
        font_est = ImageFont.truetype("arialbd.ttf", 13)
    except:
        font_title = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_est = ImageFont.load_default()
        
    draw.text((150, 42), "DECCAN", fill=(255, 255, 255), font=font_title)
    # Red for TOOLINGS
    draw.text((325, 42), "TOOLINGS", fill=(239, 68, 68), font=font_title)
    
    # Subtitle with precision badge
    draw.text((152, 90), "SOLID CARBIDE CUTTING TOOLS & RE-SHARPENING", fill=(148, 163, 184), font=font_sub)
    
    # EST 1998 badge
    draw.rectangle([(152, 114), (235, 134)], fill=(220, 38, 38))
    draw.text((160, 117), "EST. 1998", fill=WHITE, font=font_est)
    draw.rectangle([(245, 114), (345, 134)], outline=(71, 85, 105), width=1)
    draw.text((253, 117), "5-AXIS CNC", fill=(203, 213, 225), font=font_est)
    
    img.save("public/images/logo.png", "PNG")
    print("Created logo.png")

def create_hero_image():
    width, height = 1920, 1080
    img = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(img)
    
    # Dark industrial workshop gradient with cyan and red ambient lighting
    for y in range(height):
        r = int(6 + (y / height) * 12)
        g = int(12 + (y / height) * 16)
        b = int(24 + (y / height) * 26)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
        
    # Grid lines across background
    for x in range(0, width, 60):
        draw.line([(x, 0), (x, height)], fill=(18, 30, 52), width=1)
    for y in range(0, height, 60):
        draw.line([(0, y), (width, y)], fill=(18, 30, 52), width=1)
        
    # Industrial machinery silhouettes and robotic/spindle visual representation
    # Center-right: Massive 5-axis CNC machining center inside dark illuminated enclosure
    enc_x1, enc_y1, enc_x2, enc_y2 = 900, 180, 1820, 920
    draw.rectangle([(enc_x1, enc_y1), (enc_x2, enc_y2)], fill=(15, 23, 42), outline=(51, 65, 85), width=3)
    # CNC glass observation window
    draw.rectangle([(enc_x1+60, enc_y1+60), (enc_x2-60, enc_y2-140)], fill=(10, 16, 30), outline=(30, 41, 59), width=2)
    
    # Internal illumination beam
    draw.polygon([(enc_x1+200, enc_y1+70), (enc_x2-200, enc_y1+70), (enc_x2-100, enc_y2-150), (enc_x1+100, enc_y2-150)], fill=(15, 30, 60))
    
    # High-speed spindle with glowing tool tip
    spindle_x = 1360
    draw.rectangle([(spindle_x-50, 260), (spindle_x+50, 480)], fill=(71, 85, 105), outline=(148, 163, 184), width=2)
    draw.rectangle([(spindle_x-30, 480), (spindle_x+30, 560)], fill=(100, 116, 139))
    # Collet chuck
    draw.polygon([(spindle_x-35, 560), (spindle_x+35, 560), (spindle_x+20, 620), (spindle_x-20, 620)], fill=(148, 163, 184))
    # Carbide End Mill extending with glowing red / sparks
    draw.rectangle([(spindle_x-10, 620), (spindle_x+10, 750)], fill=(203, 213, 225))
    # Spiral flutes
    for f in range(630, 740, 18):
        draw.line([(spindle_x-10, f), (spindle_x+10, f+12)], fill=(71, 85, 105), width=3)
    
    # Contact spark point / coolant mist glow
    draw.ellipse([(spindle_x-60, 730), (spindle_x+60, 810)], fill=(220, 38, 38, 80))
    draw.ellipse([(spindle_x-25, 740), (spindle_x+25, 780)], fill=(255, 200, 50, 200))
    draw.ellipse([(spindle_x-10, 745), (spindle_x+10, 765)], fill=(255, 255, 255))
    
    # Workpiece below
    draw.rectangle([(spindle_x-220, 760), (spindle_x+220, 840)], fill=(40, 50, 70), outline=(71, 85, 105), width=2)
    
    # Control Panel on machine side
    draw.rectangle([(enc_x2-280, enc_y1+100), (enc_x2-90, enc_y1+420)], fill=(30, 41, 59), outline=(71, 85, 105), width=2)
    # CNC Screen
    draw.rectangle([(enc_x2-265, enc_y1+120), (enc_x2-105, enc_y1+280)], fill=(10, 25, 45))
    # Simulated G-code lines on screen
    for gy in range(enc_y1+135, enc_y1+270, 16):
        draw.line([(enc_x2-255, gy), (enc_x2-130, gy)], fill=(14, 165, 233), width=2)
    # Machine Status Lights
    draw.ellipse([(enc_x2-140, enc_y1+310), (enc_x2-120, enc_y1+330)], fill=(34, 197, 94))
    draw.ellipse([(enc_x2-170, enc_y1+310), (enc_x2-150, enc_y1+330)], fill=(234, 179, 8))
    draw.ellipse([(enc_x2-200, enc_y1+310), (enc_x2-180, enc_y1+330)], fill=RED_ACCENT)
    
    # Laser coordinate grid lines
    draw.line([(spindle_x, 0), (spindle_x, height)], fill=(220, 38, 38, 40), width=1)
    draw.line([(0, 755), (width, 755)], fill=(220, 38, 38, 40), width=1)
    
    img.save("public/images/hero-industrial.png", "PNG")
    print("Created hero-industrial.png")

def create_product_image(filename, title, tool_type):
    width, height = 800, 600
    img = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(img)
    
    draw_grid_background(draw, width, height, dark=True)
    draw_header_badge(draw, title.upper(), "SOLID CARBIDE • 5-AXIS GROUND", x=50, y=45)
    
    # Technical drawing borders
    draw.rectangle([(40, 100), (width - 40, height - 50)], outline=(40, 55, 80), width=1)
    
    # Coordinate system & measurement callouts
    try:
        font_label = ImageFont.truetype("arial.ttf", 13)
        font_big = ImageFont.truetype("arialbd.ttf", 16)
    except:
        font_label = ImageFont.load_default()
        font_big = ImageFont.load_default()
        
    draw.text((60, 115), "DECCAN TOOLINGS | PRECISION SPECIFICATION", fill=LIGHT_STEEL, font=font_label)
    draw.text((60, height - 80), f"TOOL CLASS: {tool_type.upper()}", fill=RED_BRIGHT, font=font_big)
    draw.text((width - 240, height - 80), "TOLERANCE: h6 / 0.002mm", fill=LIGHT_STEEL, font=font_label)
    
    cx, cy = width // 2, height // 2 + 10
    
    # Draw specific cutting tool geometries
    if "drill" in filename and "burnishing" not in filename and "gun" not in filename:
        # Standard Drill (Twist drill geometry, pointed tip, twin flutes)
        # Shank
        draw.rectangle([(cx - 30, cy + 20), (cx + 30, cy + 170)], fill=CARBIDE_MED, outline=BRIGHT_STEEL, width=2)
        # Fluted cutting body
        draw.rectangle([(cx - 26, cy - 140), (cx + 26, cy + 20)], fill=CARBIDE_DARK, outline=LIGHT_STEEL, width=2)
        # 140 deg drill tip
        draw.polygon([(cx - 26, cy - 140), (cx + 26, cy - 140), (cx, cy - 185)], fill=CARBIDE_LIGHT, outline=BRIGHT_STEEL)
        # Helical spiral flutes
        for y_step in range(cy - 130, cy + 20, 28):
            draw.polygon([(cx - 26, y_step), (cx + 26, y_step + 20), (cx + 26, y_step + 30), (cx - 26, y_step + 10)], fill=CARBIDE_LIGHT)
        # Point chisel edge
        draw.line([(cx - 5, cy - 180), (cx + 5, cy - 185)], fill=WHITE, width=2)
        
    elif "endmill" in filename or "tapper" in filename:
        # End Mill / Taper End Mill
        is_taper = "tapper" in filename
        # Shank
        draw.rectangle([(cx - 32, cy + 30), (cx + 32, cy + 170)], fill=CARBIDE_MED, outline=BRIGHT_STEEL, width=2)
        
        # Cutting body (tapered or straight)
        top_w = 18 if is_taper else 32
        draw.polygon([(cx - top_w, cy - 160), (cx + top_w, cy - 160), (cx + 32, cy + 30), (cx - 32, cy + 30)], 
                     fill=CARBIDE_DARK, outline=BRIGHT_STEEL)
        
        # Multiple helical cutting flutes (Multi-helix)
        for y_step in range(cy - 150, cy + 25, 24):
            w_cur = int(top_w + (32 - top_w) * ((y_step - (cy - 150)) / 175))
            draw.line([(cx - w_cur + 2, y_step), (cx + w_cur - 2, y_step + 18)], fill=CARBIDE_SHINE, width=4)
            draw.line([(cx - w_cur + 8, y_step + 4), (cx + w_cur - 8, y_step + 22)], fill=CARBIDE_LIGHT, width=2)
        
        # End cutting teeth
        draw.polygon([(cx - top_w, cy - 160), (cx + top_w, cy - 160), (cx, cy - 170)], fill=CARBIDE_LIGHT, outline=WHITE)
        
    elif "burnishing" in filename:
        # Burnishing Drill (Stepped diameter drill + cylindrical burnishing land)
        # Shank
        draw.rectangle([(cx - 34, cy + 40), (cx + 34, cy + 170)], fill=CARBIDE_MED, outline=BRIGHT_STEEL, width=2)
        # Burnishing land (Mirror polished section)
        draw.rectangle([(cx - 32, cy - 40), (cx + 32, cy + 40)], fill=BRIGHT_STEEL, outline=WHITE, width=2)
        draw.line([(cx - 15, cy - 35), (cx - 15, cy + 35)], fill=WHITE, width=4) # high reflection
        # Pilot drill section
        draw.rectangle([(cx - 20, cy - 140), (cx + 20, cy - 40)], fill=CARBIDE_DARK, outline=LIGHT_STEEL, width=2)
        draw.polygon([(cx - 20, cy - 140), (cx + 20, cy - 140), (cx, cy - 175)], fill=CARBIDE_LIGHT, outline=WHITE)
        for y_step in range(cy - 130, cy - 40, 22):
            draw.line([(cx - 20, y_step), (cx + 20, y_step + 14)], fill=CARBIDE_LIGHT, width=3)
            
    elif "reamer" in filename:
        # Reamer (Straight multi-flute geometry with bevel lead-in)
        draw.rectangle([(cx - 28, cy + 20), (cx + 28, cy + 170)], fill=CARBIDE_MED, outline=BRIGHT_STEEL, width=2)
        draw.rectangle([(cx - 28, cy - 150), (cx + 28, cy + 20)], fill=CARBIDE_DARK, outline=BRIGHT_STEEL, width=2)
        # Straight vertical cutting margins
        for x_line in [-20, -10, 0, 10, 20]:
            draw.line([(cx + x_line, cy - 145), (cx + x_line, cy + 18)], fill=CARBIDE_SHINE, width=3)
        # Lead-in bevel
        draw.polygon([(cx - 28, cy - 150), (cx + 28, cy - 150), (cx + 22, cy - 170), (cx - 22, cy - 170)], fill=CARBIDE_LIGHT, outline=WHITE)
        
    elif "woodruff" in filename:
        # Woodruff keyseat cutter (T-slot circular disc with shank)
        draw.rectangle([(cx - 16, cy - 10), (cx + 16, cy + 170)], fill=CARBIDE_MED, outline=BRIGHT_STEEL, width=2)
        draw.rectangle([(cx - 10, cy - 80), (cx + 10, cy - 10)], fill=CARBIDE_DARK, outline=LIGHT_STEEL, width=1)
        # Circular cutting disc head
        draw.ellipse([(cx - 100, cy - 160), (cx + 100, cy - 60)], fill=CARBIDE_DARK, outline=BRIGHT_STEEL, width=3)
        # Perimeter cutting teeth
        for ang in range(0, 360, 24):
            rad = math.radians(ang)
            px = cx + math.cos(rad) * 98
            py = (cy - 110) + math.sin(rad) * 48
            draw.line([(cx, cy - 110), (px, py)], fill=CARBIDE_LIGHT, width=2)
            draw.ellipse([(px-4, py-4), (px+4, py+4)], fill=RED_ACCENT)
        draw.ellipse([(cx - 30, cy - 125), (cx + 30, cy - 95)], fill=LIGHT_STEEL)
        
    elif "special" in filename:
        # Custom Special Tool (Multi-diameter step cutter)
        draw.rectangle([(cx - 35, cy + 50), (cx + 35, cy + 170)], fill=CARBIDE_MED, outline=BRIGHT_STEEL, width=2)
        # Step 1
        draw.rectangle([(cx - 32, cy - 20), (cx + 32, cy + 50)], fill=CARBIDE_DARK, outline=LIGHT_STEEL, width=2)
        # Step 2
        draw.rectangle([(cx - 22, cy - 90), (cx + 22, cy - 20)], fill=CARBIDE_LIGHT, outline=BRIGHT_STEEL, width=2)
        # Step 3
        draw.rectangle([(cx - 12, cy - 150), (cx + 12, cy - 90)], fill=CARBIDE_DARK, outline=LIGHT_STEEL, width=2)
        draw.polygon([(cx - 12, cy - 150), (cx + 12, cy - 150), (cx, cy - 175)], fill=CARBIDE_LIGHT, outline=WHITE)
        # Form flutes
        for y_step in range(cy - 140, cy + 40, 20):
            draw.line([(cx - 20, y_step), (cx + 20, y_step + 12)], fill=CARBIDE_SHINE, width=3)
            
    elif "broaching" in filename:
        # Broaching tool (Flat / round progressive tooth rack)
        draw.rectangle([(cx - 20, cy - 160), (cx + 20, cy + 170)], fill=CARBIDE_DARK, outline=BRIGHT_STEEL, width=2)
        # Progressive teeth along length
        tooth_w = 20
        for i, y_tooth in enumerate(range(cy + 130, cy - 150, -20)):
            tw = min(40, 20 + i * 2)
            draw.polygon([(cx - tw, y_tooth), (cx + tw, y_tooth), (cx + tw - 4, y_tooth - 8), (cx - tw + 4, y_tooth - 8)], 
                         fill=CARBIDE_SHINE if i % 2 == 0 else RED_ACCENT, outline=BRIGHT_STEEL)
            
    elif "brazed" in filename:
        # Brazed cutter (Steel tool body with silver brazed carbide tip)
        draw.rectangle([(cx - 30, cy - 60), (cx + 30, cy + 170)], fill=(71, 85, 105), outline=BRIGHT_STEEL, width=2)
        # Brazing shim (Golden / copper line)
        draw.polygon([(cx - 32, cy - 60), (cx + 32, cy - 60), (cx + 38, cy - 70), (cx - 26, cy - 70)], fill=GOLD_ACCENT)
        # Solid carbide tip head
        draw.polygon([(cx - 26, cy - 70), (cx + 38, cy - 70), (cx + 42, cy - 160), (cx - 20, cy - 140)], fill=CARBIDE_DARK, outline=WHITE, width=2)
        draw.line([(cx - 20, cy - 140), (cx + 42, cy - 160)], fill=CARBIDE_SHINE, width=4)
        
    elif "workrest" in filename:
        # Workrest blade (Centerless grinder blade with carbide wear tip)
        draw.polygon([(cx - 180, cy + 140), (cx + 180, cy + 140), (cx + 180, cy - 30), (cx - 180, cy - 30)], 
                     fill=(51, 65, 85), outline=BRIGHT_STEEL, width=2)
        # Carbide top wear strip with bevel
        draw.polygon([(cx - 180, cy - 30), (cx + 180, cy - 30), (cx + 180, cy - 90), (cx - 180, cy - 70)], 
                     fill=CARBIDE_LIGHT, outline=WHITE, width=2)
        # Micro-lapped top edge
        draw.line([(cx - 180, cy - 70), (cx + 180, cy - 90)], fill=CARBIDE_SHINE, width=5)
        # Mounting bolt holes
        for hx in [cx - 100, cx, cx + 100]:
            draw.ellipse([(hx - 15, cy + 30), (hx + 15, cy + 60)], fill=(20, 30, 45), outline=LIGHT_STEEL, width=2)
            
    elif "gundrill" in filename:
        # Single lip gundrill with kidney profile and coolant conduit
        draw.rectangle([(cx - 16, cy - 120), (cx + 16, cy + 170)], fill=CARBIDE_MED, outline=BRIGHT_STEEL, width=2)
        # Straight V-flute along body
        draw.line([(cx - 4, cy - 120), (cx - 4, cy + 170)], fill=(20, 30, 45), width=6)
        # Carbide cutting head with single lip
        draw.polygon([(cx - 18, cy - 120), (cx + 18, cy - 120), (cx + 18, cy - 170), (cx - 6, cy - 175), (cx - 18, cy - 150)],
                     fill=CARBIDE_DARK, outline=WHITE, width=2)
        # Internal coolant hole indicator
        draw.ellipse([(cx + 2, cy - 155), (cx + 10, cy - 145)], fill=CYAN_ACCENT)
    
    # Precision dimension lines
    draw.line([(cx + 80, cy - 150), (cx + 80, cy + 150)], fill=RED_ACCENT, width=1)
    draw.line([(cx + 70, cy - 150), (cx + 90, cy - 150)], fill=RED_ACCENT, width=1)
    draw.line([(cx + 70, cy + 150), (cx + 90, cy + 150)], fill=RED_ACCENT, width=1)
    draw.text((cx + 95, cy - 8), "L1 (OAL)", fill=WHITE, font=font_label)
    
    img.save(filename, "PNG")
    print(f"Created {filename}")

def create_machinery_image(filename, machine_name, machine_type, brand):
    width, height = 800, 600
    img = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(img)
    
    draw_grid_background(draw, width, height, dark=True)
    draw_header_badge(draw, machine_name.upper(), f"MAKE: {brand.upper()} | {machine_type.upper()}", x=45, y=35)
    
    try:
        font_brand = ImageFont.truetype("arialbd.ttf", 26)
        font_screen = ImageFont.truetype("arial.ttf", 12)
    except:
        font_brand = ImageFont.load_default()
        font_screen = ImageFont.load_default()
        
    # Machine Cabinet Base
    bx1, by1, bx2, by2 = 100, 140, 700, 520
    draw.rectangle([(bx1, by1), (bx2, by2)], fill=(20, 30, 48), outline=(71, 85, 105), width=3)
    
    # Top canopy & status beacon
    draw.rectangle([(bx1+40, by1-20), (bx2-40, by1)], fill=(30, 41, 59), outline=(71, 85, 105), width=2)
    # Tri-color signal tower
    draw.rectangle([(bx2-100, by1-60), (bx2-80, by1-20)], fill=(15, 23, 42), outline=(71, 85, 105), width=1)
    draw.rectangle([(bx2-98, by1-58), (bx2-82, by1-46)], fill=(34, 197, 94)) # Green
    draw.rectangle([(bx2-98, by1-44), (bx2-82, by1-34)], fill=(234, 179, 8)) # Yellow
    draw.rectangle([(bx2-98, by1-32), (bx2-82, by1-22)], fill=RED_ACCENT) # Red
    
    # Large Safety Observation Window
    wx1, wy1, wx2, wy2 = bx1 + 40, by1 + 40, bx1 + 380, by2 - 40
    draw.rectangle([(wx1, wy1), (wx2, wy2)], fill=(10, 16, 28), outline=(51, 65, 85), width=2)
    
    # Machine interior: 5-Axis spindle & grinding wheel pack
    cx, cy = (wx1 + wx2) // 2, (wy1 + wy2) // 2
    # Spindle head
    draw.rectangle([(cx - 40, wy1 + 20), (cx + 40, cy - 20)], fill=(71, 85, 105), outline=(148, 163, 184), width=2)
    # Diamond grinding wheel pack
    draw.ellipse([(cx - 50, cy - 25), (cx + 50, cy + 25)], fill=(160, 174, 192), outline=WHITE, width=2)
    draw.ellipse([(cx - 20, cy - 10), (cx + 20, cy + 10)], fill=(71, 85, 105))
    # Workpiece holding collet / blank
    draw.rectangle([(cx - 15, cy + 20), (cx + 15, wy2 - 30)], fill=CARBIDE_SHINE, outline=BRIGHT_STEEL, width=1)
    # Coolant nozzles
    draw.line([(wx1 + 40, cy - 40), (cx - 20, cy)], fill=(14, 165, 233), width=3)
    
    # CNC Operator Control Unit
    cx1, cy1, cx2, cy2 = bx1 + 410, by1 + 50, bx2 - 40, by1 + 300
    draw.rectangle([(cx1, cy1), (cx2, cy2)], fill=(30, 41, 59), outline=(71, 85, 105), width=2)
    # Display Screen
    draw.rectangle([(cx1 + 15, cy1 + 15), (cx2 - 15, cy1 + 170)], fill=(10, 20, 35), outline=(14, 165, 233), width=1)
    # Brand logo on panel
    draw.text((cx1 + 20, cy1 + 25), brand, fill=RED_BRIGHT, font=font_brand)
    # Simulated CNC coordinates
    coords = ["X: +142.508 mm", "Y:  -38.204 mm", "Z: +089.412 mm", "A:  +45.000 deg", "C: +180.000 deg", "SPINDLE: 8,500 RPM"]
    for i, c in enumerate(coords):
        draw.text((cx1 + 20, cy1 + 65 + i * 16), c, fill=(148, 163, 184), font=font_screen)
        
    # Operator buttons & Emergency Stop
    for by in range(cy1 + 185, cy1 + 230, 20):
        for bx in range(cx1 + 25, cx2 - 60, 30):
            draw.rectangle([(bx, by), (bx + 18, by + 12)], fill=(71, 85, 105))
    # E-Stop
    draw.ellipse([(cx2 - 50, cy1 + 195), (cx2 - 25, cy1 + 220)], fill=RED_ACCENT, outline=WHITE, width=2)
    
    # Lower Maintenance Panels
    draw.rectangle([(bx1 + 410, by1 + 320), (bx2 - 40, by2 - 40)], fill=(25, 35, 52), outline=(51, 65, 85), width=1)
    draw.text((bx1 + 430, by1 + 340), "5-AXIS SIMULTANEOUS CNC", fill=LIGHT_STEEL, font=font_screen)
    draw.text((bx1 + 430, by1 + 365), f"MODEL: {machine_name}", fill=WHITE, font=font_screen)
    
    img.save(filename, "PNG")
    print(f"Created {filename}")

def create_inspection_image(filename, name, brand, role):
    width, height = 800, 600
    img = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(img)
    
    draw_grid_background(draw, width, height, dark=True)
    draw_header_badge(draw, name.upper(), f"EQUIPMENT: {brand.upper()} | {role.upper()}", x=45, y=35)
    
    try:
        font_brand = ImageFont.truetype("arialbd.ttf", 22)
        font_label = ImageFont.truetype("arial.ttf", 13)
    except:
        font_brand = ImageFont.load_default()
        font_label = ImageFont.load_default()
        
    if "zoller" in filename or "speroni" in filename:
        # Vertical Tool Presetter & Measuring Column with Optical Camera
        # Heavy granite table base
        draw.rectangle([(120, 440), (680, 520)], fill=(40, 48, 60), outline=(148, 163, 184), width=2)
        draw.text((140, 470), f"{brand} GRANITE MEASURING BASE", fill=LIGHT_STEEL, font=font_label)
        
        # High precision tool holding spindle
        draw.rectangle([(220, 360), (320, 440)], fill=(100, 116, 139), outline=WHITE, width=2)
        # Clamped tool silhouette
        draw.rectangle([(260, 240), (280, 360)], fill=CARBIDE_SHINE, outline=BRIGHT_STEEL, width=1)
        
        # Vertical precision measuring column (Z-axis)
        draw.rectangle([(380, 130), (450, 440)], fill=(30, 41, 59), outline=(71, 85, 105), width=2)
        draw.line([(415, 140), (415, 430)], fill=RED_ACCENT, width=2) # Linear scale
        
        # Optical measuring carriage with telecentric camera
        draw.rectangle([(330, 220), (420, 300)], fill=(71, 85, 105), outline=WHITE, width=2)
        draw.ellipse([(310, 245), (340, 275)], fill=(10, 16, 28), outline=CYAN_ACCENT, width=2)
        draw.line([(310, 260), (280, 260)], fill=CYAN_ACCENT, width=2) # Laser crosshair
        
        # Digital Display / PC Screen
        draw.rectangle([(480, 150), (660, 340)], fill=(15, 23, 42), outline=(14, 165, 233), width=2)
        draw.text((500, 165), f"{name}", fill=WHITE, font=font_brand)
        draw.text((500, 195), "PILOT 3.0 METROLOGY" if "zoller" in filename else "INTEGRATED TOOL MGMT", fill=RED_BRIGHT, font=font_label)
        # Visualized tool cutting edge contour on screen
        draw.line([(510, 270), (550, 270), (580, 230), (630, 230)], fill=CYAN_ACCENT, width=3)
        draw.text((500, 290), "Radius: 3.001 mm", fill=LIGHT_STEEL, font=font_label)
        draw.text((500, 310), "Runout: 0.0018 mm", fill=WHITE, font=font_label)
        
    else:
        # Mitutoyo Profile Projector (Optical Comparator with large circular viewing screen)
        draw.rectangle([(160, 120), (640, 520)], fill=(20, 30, 48), outline=(71, 85, 105), width=2)
        # Circular optical projection glass
        draw.ellipse([(280, 150), (520, 390)], fill=(12, 28, 36), outline=(34, 197, 94), width=3)
        # Reticle crosshair with angle graduations
        draw.line([(400, 160), (400, 380)], fill=(34, 197, 94), width=1)
        draw.line([(290, 270), (510, 270)], fill=(34, 197, 94), width=1)
        draw.ellipse([(340, 210), (460, 330)], outline=(34, 197, 94), width=1)
        # Projected tool silhouette profile
        draw.polygon([(370, 320), (370, 270), (400, 230), (430, 270), (430, 320)], fill=(5, 12, 18), outline=(34, 197, 94), width=2)
        # Micrometer XY stage below
        draw.rectangle([(250, 420), (550, 480)], fill=(51, 65, 85), outline=WHITE, width=2)
        draw.text((270, 445), "MITUTOYO DIGITAL COUNTER: 0.001mm", fill=WHITE, font=font_label)
        
    img.save(filename, "PNG")
    print(f"Created {filename}")

def create_conventional_image(filename, name, machine_type):
    width, height = 800, 600
    img = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(img)
    
    draw_grid_background(draw, width, height, dark=True)
    draw_header_badge(draw, name.upper(), f"CONVENTIONAL GRINDER | {machine_type.upper()}", x=45, y=35)
    
    try:
        font_brand = ImageFont.truetype("arialbd.ttf", 22)
        font_label = ImageFont.truetype("arial.ttf", 13)
    except:
        font_brand = ImageFont.load_default()
        font_label = ImageFont.load_default()
        
    # Cast Iron Machine Bed
    draw.polygon([(100, 450), (700, 450), (660, 520), (140, 520)], fill=(30, 41, 59), outline=(100, 116, 139), width=3)
    draw.text((160, 475), f"{name} • PRECISION WORKBED", fill=WHITE, font=font_brand)
    
    # Workhead & Grinding Wheel Head
    draw.rectangle([(180, 260), (320, 450)], fill=(51, 65, 85), outline=(148, 163, 184), width=2)
    draw.text((200, 280), "WORKHEAD", fill=LIGHT_STEEL, font=font_label)
    
    # Swivel Wheelhead
    draw.rectangle([(440, 200), (600, 450)], fill=(51, 65, 85), outline=(148, 163, 184), width=2)
    # Grinding Wheel
    draw.ellipse([(380, 230), (460, 310)], fill=(160, 174, 192), outline=WHITE, width=2)
    
    # Handwheels & Micrometer dials
    for hx in [240, 520]:
        draw.ellipse([(hx - 25, 410), (hx + 25, 460)], fill=(100, 116, 139), outline=WHITE, width=2)
        draw.line([(hx, 410), (hx, 460)], fill=RED_ACCENT, width=3)
        
    img.save(filename, "PNG")
    print(f"Created {filename}")

def create_coating_image():
    width, height = 900, 600
    img = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(img)
    
    # Ultra-dark plasma chamber atmosphere
    for y in range(height):
        r = int(12 + (y / height) * 15)
        g = int(8 + (y / height) * 12)
        b = int(28 + (y / height) * 35)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
        
    draw_grid_background(draw, width, height, dark=True)
    draw_header_badge(draw, "ADVANCED PVD COATING", "PHYSICAL VAPOR DEPOSITION • HARD. SHARP. DURABLE.", x=50, y=40)
    
    # Vacuum chamber circular silhouette
    draw.ellipse([(150, 110), (750, 530)], fill=(12, 18, 36), outline=(99, 102, 241), width=3)
    
    # Plasma ionization glow in chamber center
    for rad in range(160, 0, -10):
        alpha = int(40 * (1 - rad / 160))
        draw.ellipse([(450 - rad, 320 - rad), (450 + rad, 320 + rad)], fill=(60 + alpha, 40, 120 + alpha))
    
    # Rotary carousel holding cutting tools with diverse multi-color PVD coatings
    coatings = [
        ("TINALOX SN²", (99, 102, 241), -120),
        ("HYPERLOX", (245, 158, 11), -60),
        ("ALCRONA PRO", (203, 213, 225), 0),
        ("STEELCON", (14, 165, 233), 60),
        ("TIN COAT", (234, 179, 8), 120),
    ]
    
    try:
        font_tool = ImageFont.truetype("arialbd.ttf", 13)
    except:
        font_tool = ImageFont.load_default()
        
    for name, color, offset_x in coatings:
        tx = 450 + offset_x
        ty = 320
        # Tool body
        draw.rectangle([(tx - 12, ty - 90), (tx + 12, ty + 70)], fill=color, outline=WHITE, width=1)
        # Helical Flutes with sheen
        for f in range(ty - 80, ty + 60, 16):
            draw.line([(tx - 12, f), (tx + 12, f + 10)], fill=(255, 255, 255), width=2)
        # Coating label
        draw.text((tx - 35, ty + 85), name, fill=WHITE, font=font_tool)
        
    img.save("public/images/coating/pvd-coating.png", "PNG")
    print("Created public/images/coating/pvd-coating.png")

def main():
    ensure_dir("public/images")
    ensure_dir("public/images/machinery")
    ensure_dir("public/images/inspection")
    ensure_dir("public/images/conventional")
    ensure_dir("public/images/products")
    ensure_dir("public/images/coating")
    
    create_logo()
    create_hero_image()
    create_coating_image()
    
    # Products
    product_list = [
        ("public/images/products/drills.png", "Solid Carbide Drills", "Drilling Tools"),
        ("public/images/products/endmills.png", "Solid Carbide End Mills", "Milling Cutters"),
        ("public/images/products/burnishing-drill.png", "Burnishing Drills", "Bore Sizing Tools"),
        ("public/images/products/reamers.png", "Solid Carbide Reamers", "Hole Finishing Tools"),
        ("public/images/products/tapper-endmill.png", "Taper End Mills", "Draft Angle Profilers"),
        ("public/images/products/woodruff-cutter.png", "Woodruff Cutters", "Keyway Milling"),
        ("public/images/products/special-tools.png", "Special Custom Tools", "Tailored Profile Tools"),
        ("public/images/products/broaching-tools.png", "Precision Broaching Tools", "Linear Form Cutting"),
        ("public/images/products/brazed-cutters.png", "Carbide Brazed Cutters", "Heavy-Duty Milling"),
        ("public/images/products/workrest-blades.png", "Workrest Blades", "Centerless Grinding"),
        ("public/images/products/gundrills.png", "Solid Carbide Gundrills", "Deep Hole Drilling")
    ]
    for fn, title, tt in product_list:
        create_product_image(fn, title, tt)
        
    # Machinery
    create_machinery_image("public/images/machinery/widma-lx5-plus.png", "WIDMA ECOGRIND LX5+", "5 Axis CNC Tool & Cutter Grinder", "WIDMA")
    create_machinery_image("public/images/machinery/widma-lx5.png", "WIDMA ECOGRIND LX5", "5 Axis CNC Tool & Cutter Grinder", "WIDMA")
    create_machinery_image("public/images/machinery/anca-fx5e.png", "ANCA FX5E LINEAR", "5 Axis CNC Tool & Cutter Grinder", "ANCA")
    create_machinery_image("public/images/machinery/anca-fx5.png", "ANCA FX5 LINEAR", "5 Axis CNC Tool & Cutter Grinder", "ANCA")
    
    # Inspection
    create_inspection_image("public/images/inspection/zoller-smile-420.png", "ZOLLER SMILE 420", "ZOLLER", "CNC Optical Tool Presetter & Measuring")
    create_inspection_image("public/images/inspection/speroni-magis-400.png", "SPERONI MAGIS 400", "SPERONI", "Precision Tool Presetting System")
    create_inspection_image("public/images/inspection/mitutoyo-profile-projector.png", "MITUTOYO PROFILE PROJECTOR", "MITUTOYO", "Optical Metrology & Contour Measurement")
    
    # Conventional
    create_conventional_image("public/images/conventional/sigma-utc-200m.png", "SIGMA UTC 200M", "Universal Tool & Cutter Grinder")
    create_conventional_image("public/images/conventional/hmt-k130.png", "HMT K130 CG MACHINE", "Precision Cylindrical Grinder")
    
    print("All 21 local dummy industrial images generated successfully!")

if __name__ == "__main__":
    main()
