from dataclasses import dataclass

#   DATACLASS WITH PARAMETERS AND NECESSARILY THINGS
@dataclass
class Parameters:
    data:      str = '../datasets/data.yaml'
    epochs:    int = 100
    batch:     int = 24
    imgsz:     int = 640
    device:    str = 'cuda'
    optimizer: str = 'Adam'
    lr0:       float = 0.01


#   PARAMETERS AND DATASET AS OBJECT
config_params = Parameters()