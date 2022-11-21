export interface IMapper<E,M,R>{
  toEntity(model: M): E;
  toModel(entity: E): Promise<M>;
  toResponse(entity: E): R;
}