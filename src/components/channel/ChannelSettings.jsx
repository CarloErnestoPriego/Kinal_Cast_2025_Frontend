import { useState } from "react";
import {
    validateUsername,
    usernameValidationMessage,
    validateAvatarUrl,
    avatarUrlValidateMessage,
    validateDescription,
    descriptionValidateMessage,
    validateTitle,
    titleValidationMessage
} from '../../shared/validators'
import { Input } from '../Input'

const inputs = [
    {
        field: 'username',
        label: 'Username',
        validationMessage: usernameValidationMessage,
        type: 'text'
    },
    {
        field: 'title',
        label: 'Title',
        validationMessage: titleValidationMessage,
        type: 'text'
    },
    {
        field: 'avatarUrl',
        label: 'Avatar Url',
        validationMessage: avatarUrlValidateMessage,
        type: 'text'
    },
    {
        field: 'description',
        label: 'Descripción',
        validationMessage: descriptionValidateMessage,
        type: 'text'
    }
]

export const ChannelSettings = ({ settings, saveSettings }) => {
    const [formState, setFormState] = useState({
        username: {
            isValid: validateUsername(settings.username),
            showError: false,
            value: settings.username
        },
        title: {
            isValid: validateTitle(settings.title),
            showError: false,
            value: settings.title
        },
        avatarUrl: {
            isValid: validateAvatarUrl(settings.avatarUrl),
            showError: false,
            value: settings.avatarUrl
        },
        description: {
            isValid: validateDescription(settings.description),
            showError: false,
            value: settings.description
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {

        let isValid = false

        switch(field) {
            case 'username':
                isValid = validateUsername(value)
                break;
            case 'title':
                isValid = validateTitle(value)
                break;
            case 'avatarUrl':
                isValid = validateAvatarUrl(value)
                break;
            case 'description':
                isValid = validateDescription(value)
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        saveSettings({
            username: formState.username.value,
            title: formState.title.value,
            avatarUrl: formState.avatarUrl.value,
            description: formState.description.value
        })
    }

    const isSubmitButtonDisable = !formState.username.isValid ||
        !formState.title.isValid ||
        !formState.avatarUrl.isValid ||
        !formState.description.isValid

    return (
        <form className="settings-form">
            {inputs.map((inputs) => (
                <Input 
                    key={inputs.field}
                    field={inputs.field}
                    label={inputs.label}
                    value={formState[inputs.field].value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState[inputs.field].showError}
                    validationMessage={inputs.validationMessage}
                    type={inputs.type}
                    textArea={inputs.textArea}
                />
            ))}
            <button onClick={handleFormSubmit} disabled={isSubmitButtonDisable}>
                Update
            </button>
        </form>
    )
}