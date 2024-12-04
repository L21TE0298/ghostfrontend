export interface CouponDTO {   
    idCoupon: number;
    codeDiscount: string;
    description: string;
    initDate: Date;
    expirationDate: Date;
    discountPercentage: number;
    status: boolean;
    idCategory:number;
}
export interface CouponCrearDTO {
    codeDiscount: string;
    description: string;
    initDate: Date;
    expirationDate: Date;
    discountPercentage: number;
    status: boolean;
    idCategory:number;
}