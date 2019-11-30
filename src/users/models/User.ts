import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUser {
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly age: number;
    @ApiModelProperty()
    readonly id: string;
}