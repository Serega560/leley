<script setup>
import Telegram from '@/assets/icons/telegram.svg'
import Mail from '@/assets/icons/mail.svg'

defineProps({
  inFooter: {
    type: Boolean,
    default: false
  },
  isHomePage: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="contacts" :class="{
    'contacts--footer': inFooter,
    'contacts--white': isHomePage && !inFooter,
    'contacts--black': !isHomePage && !inFooter
  }">
    <a target="_blank" href="https://t.me/Ekaterrinnna">
      <Telegram class="contacts__telegram"/>
    </a>
    <a :href="`https://mail.google.com/mail/?view=cm&fs=1&to=info@leley.ru`" target="_blank">
      <Mail class="contacts__mail"/>
    </a>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/media.scss' as *;
@use '@/assets/styles/container.scss' as *;

.contacts {
  display: flex;
  gap: 0 20px;
  align-items: center;

  @include vp-767 {
    flex-direction: column;
    align-items: start;
  }

  .contacts__telegram {
    width: 30px;
    height: 30px;
    font-size: 0;
    transition: color 0.4s ease;
  }

  .contacts__mail {
    font-size: 0;
    transition: color 0.4s ease;
  }
}

.contacts--white {
  .contacts__telegram {
    color: var(--color-default-white);

    &:hover {
      color: var(--color-jordy-blue);
    }
  }

  .contacts__mail {
    color: var(--color-default-white);

    &:hover {
      color: var(--color-jordy-blue);
    }
  }
}

.contacts--black {
  .contacts__telegram {
    color: var(--color-default-black);

    &:hover {
      color: var(--color-jordy-blue);
    }
  }

  .contacts__mail {
    color: var(--color-default-black);

    &:hover {
      color: var(--color-jordy-blue);
    }
  }
}

.contacts--footer {
  .contacts__telegram {
    width: 40px;
    height: 40px;
    color: var(--color-jordy-blue);
  }

  .contacts__mail {
    width: 30px;
    height: auto;
    color: var(--color-jordy-blue);

    @include vp-767 {
      margin-left: 5px;
    }
  }
}
</style>