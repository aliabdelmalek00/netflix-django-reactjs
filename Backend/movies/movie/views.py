from rest_framework import generics
from .models import Movie
from .serializers import MovieSerializer


class MovieListApi(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        movie_type = self.request.GET.get('movieType')
        if movie_type:
            return Movie.objects.all().filter(movieType=movie_type)
        else:
            return Movie.objects.all()
