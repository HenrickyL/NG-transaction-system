export interface IUseCase<REQ,RES>{
  execute(request: REQ): Promise<RES> 
  validate?: (request: REQ)=> Promise<void>;
}