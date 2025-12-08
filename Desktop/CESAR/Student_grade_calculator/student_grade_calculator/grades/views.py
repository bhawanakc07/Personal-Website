from django.shortcuts import render

from .forms import GradeForm

def index(request):
    if request.method == 'POST':
        form = GradeForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            math = form.cleaned_data['math']
            science = form.cleaned_data['science']
            english = form.cleaned_data['english']
            total = math + science + english
            average = total / 3
            if average >= 90:
                grade = 'A'
            elif average >= 80:
                grade = 'B'
            elif average >= 70:
                grade = 'C'
            elif average >= 60:
                grade = 'D'
            else:
                grade = 'F'
            
            context = {
                'name': name,
                'math': math,
                'science': science,
                'english': english,
                'total': total,
                'average': average,
                'grade': grade
            }
            return render(request, 'grades/result.html', context)
          
    else:
        form = GradeForm()
    
    return render(request, 'grades/index.html', {'form': form})



