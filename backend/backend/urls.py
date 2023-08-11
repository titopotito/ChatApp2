"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import url
from chatapp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user', UserView.as_view(), name='user_view'),
    path('register', RegisterUserView.as_view(), name="register_view"),
    path('login', LoginView.as_view(), name="login_view"),
    path('logout', LogoutView.as_view(), name="logout_view"),
    path('chatrooms', ChatRoomListView.as_view(), name="chatroom_list_view"),
    path('chatrooms/<int:id>', ChatRoomDetailView.as_view(), name="chatroom_detail_view"),
    path('chatrooms/new', ChatRoomCreateView.as_view(), name="chatroom_create_view"),
    path('messages', MessageListView.as_view(), name='message_list_view'),
    path('messages/new', MessageCreateView.as_view(), name="message_create_view"),
    path('messages/delete/<int:id>', MessageDeleteView.as_view(), name="message_delete_view"),
]
