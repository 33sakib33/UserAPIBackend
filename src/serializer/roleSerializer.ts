import { Serializer} from "jsonapi-serializer";


export function convertWithoutPagination(type:string) {
    return new Serializer(type,{
        attributes: ['id','name','description','allowServerApiAccess','ignoreMobileSecurity','caseManagementId','keyCloakReferenceId','keyCloakRoleName','users','privileges','organization'],
        users : {
            attributes: ['id', 'username','firstName','lastName', 'keyCloakReferenceId']
        },
        privileges : {
            attributes: ['id', 'name','description']
        },
        organization:{
            attributes: ['id', 'name']

        },
        keyForAttribute: "camelCase"
      });
}

export function convertWithPagination(type:string,meta:any) {
    return new Serializer(type,{
        attributes: ['orgId','orgName','id','name','description','allowServerApiAccess','ignoreMobileSecurity','caseManagementId','keyCloakReferenceId','keyCloakRoleName','users','privileges'],
        users : {
            attributes: ['id', 'username','firstName','lastName', 'keyCloakReferenceId']
        },
        privileges : {
            attributes: ['id', 'name','description']
        },
        keyForAttribute: "camelCase",
        meta:meta

      });
}