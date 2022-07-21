export class Tarefa {
    forEach(arg0: (obj: any, index: any, objs: any) => void) {
      throw new Error('Method not implemented.');
    }

    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean) {}
}