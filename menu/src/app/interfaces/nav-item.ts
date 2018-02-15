export interface NavItem {
  nome: string;
  desabiliar?: boolean;
  nomeIcon: string;
  route?: string;
  items?: NavItem[];
}
