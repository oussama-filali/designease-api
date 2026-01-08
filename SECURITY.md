# 🔐 Security Configuration Guide

## Environment Variables Setup

This project uses environment variables to store sensitive information. **Never commit `.env` files to Git.**

### Backend (apps/api)

1. Copy the example file:
   ```bash
   cp apps/api/.env.example apps/api/.env
   ```

2. Fill in your Supabase credentials:
   - `DATABASE_URL`: Get from Supabase > Settings > Database > Connection Pooling
   - `DIRECT_URL`: Get from Supabase > Settings > Database > Connection String
   - `SUPABASE_JWT_SECRET`: Get from Supabase > Settings > API > JWT Secret (NOT the anon key!)
   - `SUPABASE_URL`: Your project URL

### Frontend (apps/web)

1. Copy the example file:
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   ```

2. Fill in your public keys:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Get from Supabase > Settings > API > anon public
   - `NEXT_PUBLIC_API_URL`: Your backend API URL (default: http://localhost:3001)

## Security Checklist Before Commit

- [ ] No `.env` files are tracked by Git (check with `git status`)
- [ ] `.env` is listed in `.gitignore`
- [ ] Only `.env.example` files with placeholder values are committed
- [ ] No hardcoded secrets in source code
- [ ] All sensitive values use `process.env.*`

## What NOT to commit

❌ `.env`
❌ `.env.local`
❌ Database passwords
❌ JWT secrets
❌ API private keys
❌ Supabase service role keys

## What's safe to commit

✅ `.env.example` (with placeholder values)
✅ `.env.local.example`
✅ Public API keys (NEXT_PUBLIC_* variables)
✅ Configuration files without secrets

## Rotating Compromised Secrets

If you accidentally commit secrets:

1. **Immediately rotate** all compromised credentials in Supabase
2. Update your local `.env` files
3. Use `git-filter-repo` or BFG Repo-Cleaner to remove from Git history
4. Force push the cleaned repository
5. Notify your team

## Additional Resources

- [Supabase Security Best Practices](https://supabase.com/docs/guides/platform/going-into-prod#security)
- [GitHub: Removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
