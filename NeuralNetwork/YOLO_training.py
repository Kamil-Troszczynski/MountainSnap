from ultralytics import YOLO
import torch


model = YOLO()
model.load('TunedWeights/best_1tuning.pt')

DEVICE        = torch.accelerator.current_accelerator().type if torch.accelerator.is_available() else 'cpu'
PATH          = '../datasets/data.yaml'

EPOCHS          = 40
BATCH_SIZE      = 24
IMAGE_SIZE      = 640
OPTIMIZER       = 'AdamW'
LEARNING_RATE_E = 0.0001
LEARNING_RATE_F = 0.0005
WEIGHT_DECAY    = 0.0002
WARMUP_EPOCHS   = 3

model.train(
    data          = PATH,
    epochs        = EPOCHS,
    batch         = BATCH_SIZE,
    imgsz         = IMAGE_SIZE,
    device        = DEVICE,
    optimizer     = OPTIMIZER,
    val           = True,
    lr0           = LEARNING_RATE_E,
    lrf           = LEARNING_RATE_F,
    weight_decay  = WEIGHT_DECAY,
    warmup_epochs = WARMUP_EPOCHS 
)