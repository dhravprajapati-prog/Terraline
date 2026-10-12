from rest_framework import generics
from rest_framework.permissions import AllowAny

from leads.models import Lead
from leads.serializers import LeadSerializer


class LeadCreateView(generics.CreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permission_classes = [AllowAny]
