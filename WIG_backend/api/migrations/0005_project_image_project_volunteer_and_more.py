# Generated by Django 5.0.6 on 2024-05-29 00:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_gallery_projectgallery_remove_project_desc_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.AddField(
            model_name='project',
            name='volunteer',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='Volunteer'),
        ),
        migrations.DeleteModel(
            name='ProjectGallery',
        ),
    ]
