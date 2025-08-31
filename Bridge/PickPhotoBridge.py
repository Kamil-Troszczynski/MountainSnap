from fastapi import FastAPI, File, UploadFile
#from pydantic import BaseModel


#   CREATED OBJECT FOR CALL FastAPI
api = FastAPI()


@api.post('/upload')
async def upload(picked_file: UploadFile = File(...)):
    contents = await picked_file.read()
    return {'kontent': len(contents)} 