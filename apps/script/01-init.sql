/*==============================================================*/
/* Table: APP_USER                                              */
/*==============================================================*/
create table APP_USER (
   USER_ID              SERIAL               not null,
   APP_USER_ID          INT4                 null,
   ROLE_ID              VARCHAR(20)          not null,
   NAME                 VARCHAR(50)          not null,
   AGE                  INT4                 not null,
   USERNAME             VARCHAR(20)          not null,
   PASSWORD             VARCHAR(68)          not null,
   constraint PK_APP_USER primary key (USER_ID)
);

/*==============================================================*/
/* Index: APP_USER_PK                                           */
/*==============================================================*/
create unique index APP_USER_PK on APP_USER (
USER_ID
);

/*==============================================================*/
/* Index: TREE_USERS_FK                                         */
/*==============================================================*/
create  index TREE_USERS_FK on APP_USER (
APP_USER_ID
);

/*==============================================================*/
/* Index: AUTHERIZATION_ROL_FK                                  */
/*==============================================================*/
create  index AUTHERIZATION_ROL_FK on APP_USER (
ROLE_ID
);

/*==============================================================*/
/* Table: AUTHORIZATION_PERMISSION                              */
/*==============================================================*/
create table AUTHORIZATION_PERMISSION (
   PERMISSION_ID        INT4                 not null,
   ROLE_ID              VARCHAR(20)          not null,
   constraint PK_AUTHORIZATION_PERMISSION primary key (PERMISSION_ID, ROLE_ID)
);

/*==============================================================*/
/* Index: AUTHORIZATION_PERMISSION_PK                           */
/*==============================================================*/
create unique index AUTHORIZATION_PERMISSION_PK on AUTHORIZATION_PERMISSION (
PERMISSION_ID,
ROLE_ID
);

/*==============================================================*/
/* Index: AUTHORIZATION_PERMISSION2_FK                          */
/*==============================================================*/
create  index AUTHORIZATION_PERMISSION2_FK on AUTHORIZATION_PERMISSION (
ROLE_ID
);

/*==============================================================*/
/* Index: AUTHORIZATION_PERMISSION_FK                           */
/*==============================================================*/
create  index AUTHORIZATION_PERMISSION_FK on AUTHORIZATION_PERMISSION (
PERMISSION_ID
);

/*==============================================================*/
/* Table: PERMISSION                                            */
/*==============================================================*/
create table PERMISSION (
   PERMISSION_ID        SERIAL               not null,
   DESCRIPTION          VARCHAR(30)          not null,
   constraint PK_PERMISSION primary key (PERMISSION_ID)
);

/*==============================================================*/
/* Index: PERMISSION_PK                                         */
/*==============================================================*/
create unique index PERMISSION_PK on PERMISSION (
PERMISSION_ID
);

/*==============================================================*/
/* Table: RELATIONSHIP_3                                        */
/*==============================================================*/
create table RELATIONSHIP_3 (
   USER_ID              INT4                 not null,
   TEAM_ID              INT4                 not null,
   constraint PK_RELATIONSHIP_3 primary key (USER_ID, TEAM_ID)
);

/*==============================================================*/
/* Index: RELATIONSHIP_3_PK                                     */
/*==============================================================*/
create unique index RELATIONSHIP_3_PK on RELATIONSHIP_3 (
USER_ID,
TEAM_ID
);

/*==============================================================*/
/* Index: RELATIONSHIP_4_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_4_FK on RELATIONSHIP_3 (
TEAM_ID
);

/*==============================================================*/
/* Index: RELATIONSHIP_3_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_3_FK on RELATIONSHIP_3 (
USER_ID
);

/*==============================================================*/
/* Table: ROLE                                                  */
/*==============================================================*/
create table ROLE (
   ROLE_ID              VARCHAR(20)          not null,
   constraint PK_ROLE primary key (ROLE_ID)
);

/*==============================================================*/
/* Index: ROLE_PK                                               */
/*==============================================================*/
create unique index ROLE_PK on ROLE (
ROLE_ID
);

/*==============================================================*/
/* Table: TASK                                                  */
/*==============================================================*/
create table TASK (
   TASK_ID              SERIAL               not null,
   STATE_ID             VARCHAR(20)          null,
   TEAM_ID              INT4                 null,
   USER_ID              INT4                 not null,
   TITLE                VARCHAR(70)          not null,
   DESCRIPTION          VARCHAR(30)          not null,
   DUE_DATE             DATE                 null,
   constraint PK_TASK primary key (TASK_ID)
);

/*==============================================================*/
/* Index: TASK_PK                                               */
/*==============================================================*/
create unique index TASK_PK on TASK (
TASK_ID
);

/*==============================================================*/
/* Index: STATE_BY_TASK_FK                                      */
/*==============================================================*/
create  index STATE_BY_TASK_FK on TASK (
STATE_ID
);

/*==============================================================*/
/* Index: TEAM_RESPONSABILTIES_FK                               */
/*==============================================================*/
create  index TEAM_RESPONSABILTIES_FK on TASK (
TEAM_ID
);

/*==============================================================*/
/* Index: USER_RESPONSABILITIES_FK                              */
/*==============================================================*/
create  index USER_RESPONSABILITIES_FK on TASK (
USER_ID
);

/*==============================================================*/
/* Table: TASK_STATE                                            */
/*==============================================================*/
create table TASK_STATE (
   STATE_ID             VARCHAR(20)          not null,
   constraint PK_TASK_STATE primary key (STATE_ID)
);

/*==============================================================*/
/* Index: TASK_STATE_PK                                         */
/*==============================================================*/
create unique index TASK_STATE_PK on TASK_STATE (
STATE_ID
);

/*==============================================================*/
/* Table: TEAM                                                  */
/*==============================================================*/
create table TEAM (
   TEAM_ID              SERIAL               not null,
   NAME                 VARCHAR(50)          not null,
   DESCRIPTION          VARCHAR(30)          not null,
   constraint PK_TEAM primary key (TEAM_ID)
);

/*==============================================================*/
/* Index: TEAM_PK                                               */
/*==============================================================*/
create unique index TEAM_PK on TEAM (
TEAM_ID
);

alter table APP_USER
   add constraint FK_APP_USER_AUTHERIZA_ROLE foreign key (ROLE_ID)
      references ROLE (ROLE_ID)
      on delete restrict on update restrict;

alter table APP_USER
   add constraint FK_APP_USER_TREE_USER_APP_USER foreign key (APP_USER_ID)
      references APP_USER (USER_ID)
      on delete restrict on update restrict;

alter table AUTHORIZATION_PERMISSION
   add constraint FK_AUTHORIZ_AUTHORIZA_PERMISSI foreign key (PERMISSION_ID)
      references PERMISSION (PERMISSION_ID)
      on delete restrict on update restrict;

alter table AUTHORIZATION_PERMISSION
   add constraint FK_AUTHORIZ_AUTHORIZA_ROLE foreign key (ROLE_ID)
      references ROLE (ROLE_ID)
      on delete restrict on update restrict;

alter table RELATIONSHIP_3
   add constraint FK_RELATION_RELATIONS_APP_USER foreign key (USER_ID)
      references APP_USER (USER_ID)
      on delete restrict on update restrict;

alter table RELATIONSHIP_3
   add constraint FK_RELATION_RELATIONS_TEAM foreign key (TEAM_ID)
      references TEAM (TEAM_ID)
      on delete restrict on update restrict;

alter table TASK
   add constraint FK_TASK_STATE_BY__TASK_STA foreign key (STATE_ID)
      references TASK_STATE (STATE_ID)
      on delete restrict on update restrict;

alter table TASK
   add constraint FK_TASK_TEAM_RESP_TEAM foreign key (TEAM_ID)
      references TEAM (TEAM_ID)
      on delete restrict on update restrict;

alter table TASK
   add constraint FK_TASK_USER_RESP_APP_USER foreign key (USER_ID)
      references APP_USER (USER_ID)
      on delete restrict on update restrict;

