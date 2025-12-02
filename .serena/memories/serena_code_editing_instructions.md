# Serena Code Editing Instructions

Serena provides powerful code editing capabilities for this project. Always use Serena for code editing tasks.

## Key Principles
- **Always read files before editing** - Use `mcp_serena_read_file` or other file reading tools first
- **Use exact matching** - Copy text exactly including whitespace and indentation
- **Test after changes** - Run `pnpm lint`, `pnpm build` immediately after modifications
- **Be autonomous** - Don't ask questions, search and decide yourself

## Essential Serena Tools
- `mcp_serena_find_symbol` - Find code symbols and definitions
- `mcp_serena_find_referencing_symbols` - Find where symbols are used
- `mcp_serena_read_file` - Read files before editing (CRITICAL - always do this first)
- `mcp_serena_replace_content` - Edit file contents with regex or literal matching
- `mcp_serena_replace_symbol_body` - Replace entire symbol definitions
- `mcp_serena_rename_symbol` - Rename symbols throughout codebase
- `mcp_serena_insert_before_symbol` - Insert content before symbols
- `mcp_serena_insert_after_symbol` - Insert content after symbols

## Example Workflow
```bash
# 1. Find the symbol you want to edit
mcp_serena_find_symbol({ "name_path_pattern": "functionName", "relative_path": "src/file.ts" })

# 2. Read the file to understand context (MANDATORY)
mcp_serena_read_file({ "relative_path": "src/file.ts" })

# 3. Make precise edits using exact matching
mcp_serena_replace_content({ "mode": "literal", "needle": "exact text to replace", "repl": "new text", "relative_path": "src/file.ts" })

# 4. Test the changes
pnpm lint && pnpm build
```

## Best Practices
1. **Read files first** - Never edit without reading the target file
2. **Use exact matching** - Include all whitespace, indentation, and context
3. **Test after changes** - Run `pnpm lint`, `pnpm build`, or relevant tests
4. **Search before editing** - Use find_symbol or search_for_pattern first
5. **Handle errors gracefully** - Read error messages and fix immediately