/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldConfig, FieldHelperProps, FieldInputProps, FieldMetaProps, FormikErrors, FormikValues } from "formik";


// Formik handler Types
export interface ISetFieldValue { (field: string, value: any, shouldValidate?: boolean): Promise<void | FormikErrors<FormikValues>>}

export interface IHandleSubmit { (e?: React.FormEvent<HTMLFormElement>): void}

export interface IHandleReset { (e?: React.SyntheticEvent<any>): void}

export interface IHandleBlur {
    (e: React.FocusEvent<any>): void;
    <T = string | any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
} 

export interface IHandleChange {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
}

export interface IGetFieldProps { <Value = any>(props: string | FieldConfig<Value>): FieldInputProps<Value>}

export interface IGetFieldMeta { <Value>(name: string): FieldMetaProps<Value>}

export interface IGetFieldHelpers {<Value = any>(name: string): FieldHelperProps<Value>}