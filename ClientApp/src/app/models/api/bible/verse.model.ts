import { BaseModel } from '../../../core/models/base.model'; // TODO: Update path

export class VerseModel extends BaseModel {
  public name: number;
}

export class CreateVerseModel {
  public name: number;
}

export class UpdateVerseModel extends CreateVerseModel {}
