from django import forms

class GradeForm(forms.Form):
    name= forms.CharField(max_length=100)
    math = forms.FloatField()
    science = forms.FloatField()
    english = forms.FloatField()
   