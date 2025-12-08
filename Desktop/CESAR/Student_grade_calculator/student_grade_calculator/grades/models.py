from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=100)
    math = models.FloatField()
    science = models.FloatField()
    english = models.FloatField()
    
    def total(self):
        return self.math + self.science + self.english
    
    def average(self):
        return self.total() / 3
    
    def grade(self):
        avg = self.average()
        if avg >= 90:
            return 'A'
        elif avg >= 80:
            return 'B'
        elif avg >= 70:
            return 'C'
        elif avg >= 60:
            return 'D'
        else:
            return 'F'
    
    def __str__(self):
        return self.name

