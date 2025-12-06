subgraph L2[Application / Business Logic Layer]
    APIGW[API Gateway]
    AuthSvc[Authentication & User Service]
    ResvSvc[Reservation Service]
    PaySvc[Payment Service]
    NotifSvc[Notification Service]
    AnalyticsSvc[Analytics & Reporting Service]
end

subgraph L3[Data & Storage Layer]
    UserDB[(User DB)]
    ParkingDB[(Parking & Reservation DB)]
    TxDB[(Payment Transactions DB)]
    Cache[(Redis Cache)]
    Logs[(Audit & Logs Store)]
end

subgraph L4[Integration Layer]
    PaymentAPI[External Payment Gateway API]
    CityAPI[City / Traffic Mgmt API\n(optional)]
end

subgraph L5[IoT & Edge Layer]
    Sensor[Bay Sensors\n(ultrasonic/magnetic)]
    EdgeGW[Edge Gateway / Controller]
    GateCtrl[Entry/Exit Gate Controller]
end

%% ========== FLOWS ==========

%% Clients to API Gateway
MobileApp -->|HTTPS/REST| APIGW
WebPortal -->|HTTPS/REST| APIGW
PublicDisplay -->|HTTPS/REST| APIGW

%% API Gateway to Services
APIGW --> AuthSvc
APIGW --> ResvSvc
APIGW --> PaySvc
APIGW --> NotifSvc
APIGW --> AnalyticsSvc

%% Services to Data Layer
AuthSvc --> UserDB
ResvSvc --> ParkingDB
ResvSvc --> Cache
PaySvc --> TxDB
AnalyticsSvc --> ParkingDB
AnalyticsSvc --> TxDB
AnalyticsSvc --> Logs
NotifSvc --> Logs

%% Integration Layer Links
PaySvc -->|Secure API| PaymentAPI
AnalyticsSvc --> CityAPI

%% IoT & Edge Connections
Sensor -->|MQTT/LoRaWAN/etc.| EdgeGW
EdgeGW -->|MQTT/HTTPS| ResvSvc
GateCtrl --> EdgeGW
ResvSvc -->|Control Commands\n(open/close)| GateCtrl
