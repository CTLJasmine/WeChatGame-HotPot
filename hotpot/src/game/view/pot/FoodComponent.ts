/** 
 *  FoodComponent.ts
 *  egret
 *  Created by Liu Yang on 18/07/22.
 */
class FoodComponent extends eui.Component implements eui.UIComponent {
    private mData: food_type;
    public kImgFood: eui.Image;

    public constructor() {
        super();
        this.skinName = "FoodComponentSkin";
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    /** 
     * 设置组件数据 
     */
    public setData(data: food_type): void {
        this.mData = data;
        this.kImgFood.source = `food_${this.mData.id}_png`;
    }

    public clear(): void {
    }
}