import { Component, OnInit } from '@angular/core';

import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }
  
  removerTarefa($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "'+tarefa.nome+'"?')) {
      this.tarefaService.removerTarefa(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alteraStatusTarefa(tarefa: Tarefa): void {
    if (tarefa.concluida !== true) {
      if (confirm('A tarefa "'+tarefa.nome+'" foi concluida?')) {
        this.tarefaService.alteraStatusTarefa(tarefa.id);
      }
    } else {
      if(confirm('Deixar a tarefa "'+tarefa.nome+'" como pendente?')) {
        this.tarefaService.alteraStatusTarefa(tarefa.id);
      }
    }
    this.tarefas = this.listarTodos();
  }
}
