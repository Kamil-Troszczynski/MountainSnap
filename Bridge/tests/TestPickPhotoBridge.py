from ..PickPhotoBridge import api
from fastapi.testclient import TestClient


#   CLIENT CREATED FOR TESTING COMMUNICATION
test_client = TestClient(api)
