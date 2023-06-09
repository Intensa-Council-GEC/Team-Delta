# Generated by Django 4.1.7 on 2023-03-23 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usermodel',
            name='dob',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='gender',
            field=models.CharField(blank=True, choices=[('MALE', 'MALE'), ('FEMALE', 'FEMALE')], max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='height',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='weight',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
