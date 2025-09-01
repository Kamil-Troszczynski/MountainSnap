from fastapi import FastAPI, File, UploadFile
#from pydantic import BaseModel
#from NeuralNetwork.YOLO.YOLO import model


#   CREATED OBJECT FOR CALL FastAPI
api = FastAPI()


#   FUNCTION TO UPLOAD AN IMAGE TO ANALYZE
@api.post('/upload')
async def upload(picked_file: UploadFile = File(...)):
    contents = await picked_file.read()
    return {
            'kontent' : len(contents)
        } 


#   FUNCTION WHICH CALL MODEL TO MAKE PREDICTIONS
@api.post('/predict')
async def call_yolo_to_analyze(image):
    return {
            'Prediction' : "cos"
        }