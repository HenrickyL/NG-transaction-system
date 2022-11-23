export interface IMapper<E,M,R>{
  toEntity(model: M): E;
  toModelAsync?(entity: E): Promise<M>;
  toModel?(entity: E): M;
  toResponse(entity: E): R;
}