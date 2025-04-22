export function () {
    const user = useUser()
    const { t } = useI18n()

    const profile = computed(() => {
        return {
        name: user.value.name,
        email: user.value.email,
        phone: user.value.phone,
        address: user.value.address,
        }
    })

    const updateProfile = async (newProfile) => {
        try {
        await user.value.update(newProfile)
        return { success: true, message: t('profile.updateSuccess') }
        } catch (error) {
        return { success: false, message: t('profile.updateError') }
        }
    }

    return {
        profile,
        updateProfile,
    }
}
