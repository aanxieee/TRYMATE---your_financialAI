from django.urls import path
from .views import StockPredictionView, MarketingPredictionView

urlpatterns = [
    path('predict/stock/', StockPredictionView.as_view(), name='stock-prediction'),
    path('predict/marketing/', MarketingPredictionView.as_view(), name='marketing-prediction'),
]