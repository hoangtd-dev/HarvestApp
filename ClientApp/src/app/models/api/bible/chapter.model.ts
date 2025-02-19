import { BaseModel } from '../../../core/models/base.model'; // TODO: Update path

export class ChapterModel extends BaseModel {
  public name: number;
}

export class CreateChapterModel {
  public name: number;
}

export class UpdateChapterModel extends CreateChapterModel {}
