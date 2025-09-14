from ultralytics import YOLO
import torch

'''   ===================================== MODEL INITIALIZATION =========================================   '''

model = YOLO('yolo11n.pt')

'''   ======================================= OPTIMIZATION PROCESS =======================================   '''

#   PARAMETERS
DEVICE        = torch.accelerator.current_accelerator().type if torch.accelerator.is_available() else 'cpu'
PATH          = '../datasets/data.yaml'
ITERATIONS    = 100

#   HYPERPARAMETERS TO TUNE
EPOCHS        = 20
BATCH_SIZE    = 24
IMAGE_SIZE    = 640
OPTIMIZER     = 'AdamW'
SEARCH_SPACE = {
    'lr0'           : (0.00001,  0.01),
    'lrf'           : (0.0005 ,   0.5),
    'weight_decay'  : (0.001  ,  0.03),
    'warmup_epochs': (0      ,     5)
}

#   TUNING
model.tune(
    data       = PATH,
    epochs     = EPOCHS,
    iterations = ITERATIONS,
    space      = SEARCH_SPACE,
    batch      = BATCH_SIZE,
    imgsz      = IMAGE_SIZE,
    device     = DEVICE,
    optimizer  = OPTIMIZER,
    val        = True
)

