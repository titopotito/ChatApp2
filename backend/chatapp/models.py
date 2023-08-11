from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='', upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} Profile'


class ChatRoom(models.Model):
    members = models.ManyToManyField(User, related_name="members")


class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    chatroom = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    text_content = models.CharField(max_length=1000)
    isSeen = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
