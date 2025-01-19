from django.contrib.auth.models import AbstractUser,User
from django.db import models


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username