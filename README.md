# MountainSnap

It is an application that helps you recognize the mountain you are looking at.

## Install required dependencies

### Required things for calculations:

 #### --> python3/python -m venv .venv
 #### --> source .venv/bin/activate
 #### --> pip install requirements/requirements.txt

### Required things for GUI:

 #### --> Node.js

### In command line:

 #### --> cd frontend
 #### --> npx expo start
 #### --> npm install react-native-safe-area-context

There should be a QR code that can be scanned by your phone. Then the application will be displayed and updated in real-time.

## Roboflow Lincense

PickRecognition_TATRY - v5 5_version
==============================

This dataset was exported via roboflow.com on September 10, 2025 at 3:29 PM GMT

Roboflow is an end-to-end computer vision platform that helps you
* collaborate with your team on computer vision projects
* collect & organize images
* understand and search unstructured image data
* annotate, and create datasets
* export, train, and deploy computer vision models
* use active learning to improve your dataset over time

For state of the art Computer Vision training notebooks you can use with this dataset,
visit https://github.com/roboflow/notebooks

To find over 100k other datasets and pre-trained models, visit https://universe.roboflow.com

The dataset includes 461 images.
Objects are annotated in YOLOv11 format.

The following pre-processing was applied to each image:
* Auto-orientation of pixel data (with EXIF-orientation stripping)
* Resize to 640x640 (Stretch)

The following augmentation was applied to create 3 versions of each source image:
* 50% probability of horizontal flip
* 50% probability of vertical flip
* Random shear of between -15° to +15° horizontally and -15° to +15° vertically
* Random brigthness adjustment of between -16 and +16 percent
* Random exposure adjustment of between -15 and +15 percent
* Random Gaussian blur of between 0 and 4.5 pixels
* Salt and pepper noise was applied to 1.8 percent of pixels

## Dataset License Reference

# PickRecognition_TATRY > 5_version
https://universe.roboflow.com/pickrecognition/pickrecognition_tatry-lzpcj

Provided by a Roboflow user
License: CC BY 4.0