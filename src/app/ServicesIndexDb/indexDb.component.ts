import { TranslateService } from '@ngx-translate/core';
import {
  NgxIndexedDBModule,
  DBConfig,
  NgxIndexedDBService,
} from 'ngx-indexed-db';
import { Observable } from 'rxjs';

export interface projects {
  title: string;
}

export class IndexDbComponent {
  constructor(
    private dbService: NgxIndexedDBService,
    private translate: TranslateService
  ) {}

  public AddProjectsData(storeName: string) {
    this.dbService
      .bulkAdd(storeName, [
        {
          titleProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT1.TITLE'
          ),
          summarizeProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT1.MODALBODY'
          ),
        },
        {
          titleProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT2.TITLE'
          ),
          summarizeProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT2.MODALBODY'
          ),
        },
        {
          titleProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT3.TITLE'
          ),
          summarizeProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT3.MODALBODY'
          ),
        },
        {
          titleProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT4.TITLE'
          ),
          summarizeProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT4.MODALBODY'
          ),
        },
        {
          titleProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT5.TITLE'
          ),
          summarizeProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT5.MODALBODY'
          ),
        },
        {
          titleProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT6.TITLE'
          ),
          summarizeProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT6.MODALBODY'
          ),
        },
        {
          titleProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT7.TITLE'
          ),
          summarizeProject: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT7.MODALBODY'
          ),
        },
      ])
      .subscribe((result) => {
        console.log('result: ', result);
        return result;
      });
  }

  public AddmodalbodyData(storeName: string) {
    this.dbService
      .bulkAdd(storeName, [
        {
          title: this.translate.instant('SERVICES.PROJECTS.PROJECT1.TITLE'),
          modalbody: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT1.MODALBODY'
          ),
          urlImageProject: '',
        },
        {
          title: this.translate.instant('SERVICES.PROJECTS.PROJECT2.TITLE'),
          modalbody: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT2.MODALBODY'
          ),
          urlImageProject: '',
        },
        {
          title: this.translate.instant('SERVICES.PROJECTS.PROJECT3.TITLE'),
          modalbody: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT3.MODALBODY'
          ),
          urlImageProject: '',
        },
        {
          title: this.translate.instant('SERVICES.PROJECTS.PROJECT4.TITLE'),
          modalbody: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT4.MODALBODY'
          ),
          urlImageProject: '',
        },
        {
          title: this.translate.instant('SERVICES.PROJECTS.PROJECT5.TITLE'),
          modalbody: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT5.MODALBODY'
          ),
          urlImageProject: '',
        },
        {
          title: this.translate.instant('SERVICES.PROJECTS.PROJECT6.TITLE'),
          modalbody: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT6.MODALBODY'
          ),
          urlImageProject: '',
        },
        {
          title: this.translate.instant('SERVICES.PROJECTS.PROJECT7.TITLE'),
          modalbody: this.translate.instant(
            'SERVICES.PROJECTS.PROJECT7.MODALBODY'
          ),
          urlImageProject: '',
        },
      ])
      .subscribe((result) => {
        console.log('result: ', result);
        return result;
      });
  }

  public getByKey(storeName: string, key: IDBValidKey) {
    this.dbService.getByKey(storeName, key).subscribe((people) => {
      console.log(people);
    });
  }

  public getAll(storeName: string) {
    this.dbService.getAll(storeName).subscribe((peoples) => {
      console.log(peoples);
    });
  }

  public getByIndex(storeName: string, indexName: string, key: IDBValidKey) {
    this.dbService.getByIndex(storeName, indexName, key).subscribe((people) => {
      console.log(people);
    });
  }
  public createObjectStore(
    storeName: string,
    migrationFactory?: () => {
      [key: number]: (db: IDBDatabase, transaction: IDBTransaction) => void;
    }
  ): void {
    const storeSchema: any = {
      store: storeName,
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
      ],
    };

    this.dbService.createObjectStore(storeSchema);
  }

  public updateProject(
    storeName: string,
    _id: number,
    _title: string,
    _modalBody: string,
  ) {
    this.dbService
      .update(storeName, {
        id: _id,
        titleProject: _title,
        summarizeProject: _modalBody,
      })
      .subscribe((storeData) => {
        console.log('storeData: ', storeData);
      });
  }
  public deleteDatabase() {
    this.dbService.deleteDatabase().subscribe((deleted) => {
      console.log('Database deleted successfully: ', deleted);
    });
  }

  public delete(storeName: string, key: any) {
    this.dbService.delete(storeName, key).subscribe((allPeople) => {
      console.log('all people:', allPeople);
    });
  }
  public clear(storeName: string) {
    this.dbService.clear(storeName).subscribe((successDeleted) => {
      console.log('success? ', successDeleted);
    });
  }

  public deleteByIndex(storeName: string, key: any) {
    this.dbService.delete(storeName, key).subscribe((allPeople) => {
      console.log('all people:', allPeople);
    });
  }
  public deleteObjectStoreByName(storeName: string) {
    this.dbService.deleteObjectStore(storeName);
  }
}

//initiate
export const dbConfig: DBConfig = {
  name: 'MyIndexDb',
  version: 1,
  objectStoresMeta: [
    {
      //modalInfos added in version 1
      store: 'modalInfos',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        {
          name: 'urlImageProject',
          keypath: 'urlImageProject',
          options: { unique: false },
        },
        { name: 'modalbody', keypath: 'modalbody', options: { unique: false } },
      ],
    },
    {
      // projects added in version 1
      store: 'projects',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'titleProject',
          keypath: 'titleProject',
          options: { unique: false },
        },
        {
          name: 'summarizeProject',
          keypath: 'summarizeProject',
          options: { unique: false },
        },
      ],
    },
    {
      // loginInfo added in version 1
      store: 'loginInfo',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'usernamePortfolio',
          keypath: 'usernamePortfolio',
          options: { unique: false },
        },
        {
          name: 'passwdPortfolio',
          keypath: 'passwdPortfolio',
          options: { unique: false },
        },
      ],
    },
  ],
};
