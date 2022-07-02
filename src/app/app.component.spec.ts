import { TodoService, Todo } from './shared/services/todo.service';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

fdescribe('AppComponent', () => {
  const todoList: Todo[] = [{
    userId:    1,
    id:        1,
    title:     'aa',
    completed: true
  },
  {
    userId:    2,
    id:        2,
    title:     'bb',
    completed: true
  }
]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        MockProvider(TodoService, {
          getTodos: () => of(todoList),
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'teste-unitario-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('teste-unitario-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.querySelector('h2')?.textContent)
    expect(compiled.querySelector('h2')?.textContent).toContain('Meus afazeres');
  });

  it('A lista de Tarefas tem que ser igual', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    console.log(app.todos, todoList)
    expect(app.todos).toEqual(todoList)
  })
});
