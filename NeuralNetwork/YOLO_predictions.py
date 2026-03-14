from ultralytics import YOLO


model = YOLO()
model.load('TunedWeights/best_1tuning.pt')


results = model.predict(
    source    = '../datasets/valid/images',
    show      = True
    )
