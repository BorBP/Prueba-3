# Generated by Django 5.1.3 on 2024-11-19 04:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_active_cliente_activo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cliente',
            old_name='activo',
            new_name='active',
        ),
    ]
