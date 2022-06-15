export abstract class UrlEndpoints {
  //======================================= SHARED  =======================================

  static readonly POST_LOCATION: string = ' ';

  //======================================= Module X =======================================
  // Order
  static readonly GET_TEST: string = 'test';

  // USer List
  static readonly GET_UsersList: string = 'api/LandingPage/ProfilePlus';
  static readonly GET_UserById: string = 'Risk/GetUserDocumentsByClientId?MobileNumber=';


  // POST_TOKEN_AUTH:
  static readonly POST_TOKEN_AUTH: string = "TokenAuth/Authenticate";

  // Rating (questions)
  static readonly GET_QUESTIONS: string = 'services/app/Questions/GetAll';
  static readonly ADD_QUESTION: string = 'services/app/Questions/CreateOrEdit/';
  static readonly DELETE_QUESTION: string = 'services/app/Questions/Delete?Id=';
  static readonly GET_QUESTION_FOREDIT: string = 'services/app/Questions/GetQuestionForEdit?Id=';

  static readonly UPDATE_QUESTIONS: string = ' ';;

  // School Level For Table Dropdown
  static readonly GET_SCHOOLLEVELFORDROPDOWN: string = 'services/app/Questions/GetAllSchoolLevelForTableDropdown';

  //  Semester For Table Dropdown
  static readonly GET_SEMESTERFORDROPDOWN: string = 'services/app/Questions/GetAllSemesterForTableDropdown';

  //  Subject For Table Dropdown
  static readonly GET_SUBJECTFORDROPDOWN: string = 'services/app/Questions/GetAllSubjectForTableDropdown';

  //  Lesson For Table Dropdown
  static readonly GET_LESSONFORDROPDOWN: string = 'services/app/Questions/GetAllLessonForTableDropdown';

  //  Questions Difficalty For Table Dropdown
  static readonly GET_QUESTIONSDIFFICALTYFORDROPDOWN: string = 'services/app/Questions/GetAllQuestionsDifficaltyForTableDropdown';


}
