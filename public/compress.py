import os
from PIL import Image

# Define the input folder and output folder
input_folder = "frames"  # Replace with your folder containing images
output_folder = "compressedImages"

# Create the output folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Loop through all the files in the input folder
for filename in os.listdir(input_folder):
    # Construct the full file path
    img_path = os.path.join(input_folder, filename)

    # Check if the file is an image (optional: check file extension)
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        try:
            # Open and process the image
            img = Image.open(img_path)
            img = img.convert("P", palette=Image.ADAPTIVE, colors=256)

            # Save the processed image in the output folder
            output_path = os.path.join(output_folder, filename)
            img.save(output_path, optimize=True)

            print(f"Processed and saved: {filename}")

        except Exception as e:
            print(f"Error processing {filename}: {e}")
