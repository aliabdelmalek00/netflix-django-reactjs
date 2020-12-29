# Generated by Django 3.1.4 on 2020-12-28 12:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movieTitle', models.CharField(max_length=100)),
                ('movieSlug', models.SlugField(max_length=130)),
                ('movieDescription', models.TextField()),
                ('moviePoster', models.ImageField(blank=True, upload_to='movies/%y/%m/%d/')),
                ('movieTrailer', models.URLField()),
                ('movieType', models.CharField(choices=[('NetflixOriginals', 'NetflixOriginals'), ('Top Rated', 'Top Rated'), ('Action Movies', 'Action Movies'), ('Horror Movies', 'Horror Movies')], max_length=100)),
            ],
        ),
    ]
