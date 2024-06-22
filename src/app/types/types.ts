export interface Categoria {
  id: string;
  nombre: string;
  nombreIngles?: string;
}

export interface Marca {
  id: string;
  nombre: string;
}

export interface Modelo {
  MODELOID: string;
  MODELO: string;
}

export interface Promocion {
  VCHETIQUETA: string;
  VCHETIQUETA_COLOR: string;
  VCHETIQUETA_TITULO: string;
  VCHETIQUETA_BACKGROUND_COLOR: string;
  VCHETIQUETA_FONT_COLOR: string;
}

export interface Anio {
  INTANO: string;
}

export interface Precio {
  min: number;
  max: number | null;
}

export interface Km {
  min: number;
  max: number | null;
}

export interface Transmision {
  id: number;
  tipo: string;
}

export interface Sucursal {
  nombre: string;
}

export interface Combustible {
  id: string;
  combustible_nombre: string;
  combustible_nombre_ing: string;
}




export interface Car {
    cars?: any;
    MARCA?: string;
    MODELO?: string;
    MARCAID?: number;
    // MODELOID: number;
    // AUTODES: string;
    // CATMARMODID: number;
    // TABLA: number;
    AUTOID: number;
    // PRODUCTOID: number;
    // CATEGORIAID: number;
    INTANO: number;
    // VCHCOLOR: string;
    // VCHVERSION: string;
    // VCHDESCRIPCION: string;
    VCHPRECIO: number;
    // CLIENTEID: number;
    // VCHCODIGO: string;
    VCHMONEDA: string;
    VCHKILOMETROS: string;
    // INTCILINDRADA: number;
    // VCHTELEFONO1: string;
    // VCHTELEFONO2: string | null;
    // VCHEMAIL1: string;
    // TIPOPUB: number;
    // TIPOCONT: string;
    // VCHNOMBRE: string;
    // VCHAPELLIDOS: string;
    // VCHORIGEN: string | null;
    // BITVIDEO: null;
    // VCHPATENTE: string;
    // INTTIPO: number;
    // CONTACTOID: number;
    // INTESTADO: number;
    // INTCONDICION: number;
    // FECINIPUBLICA: string;
    // VCHFOTO: string;
    // ETIQUETA: string;
    // VCHCOMBUSTIBLE: string;
    // VCHTRANSMISION: string;
    // VCHVIDEO: string | null;
    // VCHACTIVADOR: string;
    // VCHACTIVAFINANCIAMIENTO: string;
    // VCHETIQUETA_TITULO: string;
    // VCHETIQUETA_COLOR: string;
    // VCHPIEMINIMO: string | null;
    // VCHCAE: string | null;
    // VCHNUMCUOTA: string | null;
    // VCHCUOTA: string | null;
    // VCHVFMG: string | null;
    // CLIENTE: string;
    // NOMFOTO: string;
    // VCHCTC: string | null;
    // VCHLEGALPRECIO: string;
    // VCHLEGALPRECIO2: string;
    // VCHLEGALPRECIO3: string;
    // VCH360: string | null;
    // INTPORCALIDADCALPUB: number;
    url_foto_particular: string;
    // CARROCERIAID: string;
    // PESOOPERACIONAL: number;
    // CAPACIDADCARGA: string | null;
    // ALTURAELEVACION: string | null;
    // VCHNUMSERIAL: string | null;
    // VCHFAX: string;
    // fontcolor: string;
    // PLANID: number;
    // APITOKEN: number | null;
    // TOKEN: string | null;
    // RowNumber: string;
  }