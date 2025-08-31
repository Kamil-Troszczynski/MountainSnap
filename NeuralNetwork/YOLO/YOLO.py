from ultralytics import YOLO

#   OBJECT WITH PARAMETERS
from parameters import config_params

#   SAVED MODEL
model = YOLO("YOLO/yolo12m.pt")

#   TRAINING
model.train(
    data      = config_params.data,
    epochs    = config_params.epochs,
    batch     = config_params.batch,
    imgsz     = config_params.imgsz,
    device    = config_params.device,
    optimizer = config_params.optimizer,
    lr0       = config_params.lr0,
    patience  = config_params.patience
    )