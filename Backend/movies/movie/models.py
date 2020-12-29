from django.db import models

MOVIE_TYPE = (
    ('NetflixOriginals', 'NetflixOriginals'),
    ('TopRated', 'TopRated'),
    ('ActionMovies', 'ActionMovies'),
    ('HorrorMovies', 'HorrorMovies'),
)


class Movie(models.Model):
    movieTitle = models.CharField(max_length=100)
    movieSlug = models.SlugField(max_length=130)
    movieDescription = models.TextField()
    moviePoster = models.ImageField(upload_to='movies/%y/%m/%d/', blank=True)
    movieTrailer = models.URLField()
    movieType = models.CharField(max_length=100, choices=MOVIE_TYPE)

    def __str__(self):
        return self.movieTitle
