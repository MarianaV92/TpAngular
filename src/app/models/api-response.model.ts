

// Pour recupere les code et le message egalement d'une API complete
// commande pour creer ng generate interface models/api-response --type=model  les interfaces

export interface ApiResponse <T>{
  code: string;
  message: string;
  data: T;
}
