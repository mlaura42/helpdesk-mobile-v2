export type StatusChamado = 'ABERTO' | 'CONCLUIDO';

export type Chamado = {
    id: string;
    titulo: string;
    descricao: string;
    status: StatusChamado;
};