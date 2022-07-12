import { TodoService, Todo } from './shared/services/todo.service';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

describe('AppComponent', () => {
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
  },
    {
      userId:    3,
      id:        3,
      title:     'cc',
      completed: false
    },
    {
      userId:    4,
      id:        4,
      title:     'dd',
      completed: false
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

  it('Deve renderizar o app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`tem que ter o titilo 'teste-unitario-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('teste-unitario-angular');
  });

  it('Deve ter um titulo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Meus afazeres');
  });

  it('A lista de Tarefas tem que ser igual', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.todos).toEqual(todoList)
  });

  it('A lista de Tarefas tem que ser igual', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.querySelector('app-todo'));
  });

});
